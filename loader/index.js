(function () {
  function loader() {
    const iframe = document.createElement('iframe');
    const container = document.createElement('div');
    iframe.src = 'javascript:void(0)';
    iframe.role = 'presentation';
    iframe.allow = 'autoplay';
    iframe.title = 'Tform';
    iframe.setAttribute('name', 'tf_container');
    iframe.setAttribute('id', 'tf_container');
    iframe.setAttribute('frameborder', 'no');

    const widgetId = getWidgetId(getScriptElement());
    const baseUrl = '127.0.0.1:3000';
    let config = {};

    if (!widgetId) {
      console.log('Widget ID not exist');
      return;
    }

    getConfig(`http://${baseUrl}/config/${widgetId}`, loadConfig => {
      config = loadConfig;

      if (['complete', 'interactive'].includes(document.readyState)) {
        initWidget(widgetId);
      } else {
        addListener(window, 'load', () => initWidget(widgetId));
      }
    });

    function getConfig(url, onLoad) {
      const xhr = new XMLHttpRequest();

      xhr.onload = () => {
        if (xhr.status !== 200) {
          console.log('Error load config');
          return;
        }

        let loadedConfig;

        try {
          loadedConfig = JSON.parse(xhr.response);
        } catch (error) {
          console.log('Error parse config response', error);
        }

        if (!loadedConfig) {
          return;
        }

        onLoad(loadedConfig);
      };

      xhr.open('GET', url, true);
      xhr.send(null);
    }

    function initWidget(widgetId) {
      const where = document.body.lastChild;

      if (container.style) {
        container.style.opacity = '0';
        container.style.visibility = 'hidden';
        container.style.width = 0;
        container.style.height = 0;
        container.style.overflow = 'hidden';
      }

      container.setAttribute('id', 'tf-iframe-container');
      container.appendChild(iframe);
      if (where) {
        where.parentNode.insertBefore(container, where.nextSibling);
      } else {
        document.body.appendChild(container);
      }

      let doc;

      try {
        doc = iframe.contentWindow.document;
      } catch (e) {
        iframe.src = `javascript:var d=document.open();d.domain='${document.domain}';void(0);`;
        doc = iframe.contentWindow.document;
      }

      iframe.contentWindow.widgetId = widgetId;

      const bundleSrc = getBundleSrc();
      const DOCTYPE = '<!doctype HTML>';
      const META = '<meta name="google" content="notranslate">';
      const BODY = '<body class="notranslate"></body>';
      const SCRIPT_CONTENT = `<script type="text/javascript" src="${bundleSrc}" async></script>`;
      const HEAD = '<head>' + META + SCRIPT_CONTENT + '<title>Widget</title></head>';

      doc.write(DOCTYPE + HEAD + BODY);
      doc.close();
    }

    function getBundleSrc() {
      return `http://${baseUrl}/bundle.js?rand=${config.build_number}`;
    }

    function getScriptElement() {
      if (document.currentScript) {
        return document.currentScript;
      } else {
        return document.querySelector('script[data-tf-id]');
      }
    }

    function getWidgetId(script) {
      if (!script) {
        return null;
      }

      return script.getAttribute('data-tf-id');
    }

    function addListener(element, event, fn) {
      if (element.addEventListener) {
        element.addEventListener(event, fn, false);
      } else if (element.attachEvent) {
        element.attachEvent(
          'on' + event,
          (function (el) {
            return function () {
              fn.call(el, window.event);
            };
          })(element)
        );
        element = null;
      }
    }

    function getHead() {
      const head = document.head || document.getElementsByTagName('head')[0];
      if (!head) {
        throw new Error('Cannot get document head element');
      }
      return head;
    }
  }

  try {
    loader();
  } catch (error) {
    console.error(error);
  }
})();
