global.document.createRange =
  global.document.createRange ||
  function() {
    return {
      setStart: function() {},
      setEnd: function() {},
      commonAncestorContainer: {
        nodeName: 'BODY',
        ownerDocument: global.document,
      },
      createContextualFragment: function(html) {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div;
      },
    };
  };
