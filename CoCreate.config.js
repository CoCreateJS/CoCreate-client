module.exports = {
    organization_id: "",
    key: "",
    host: {
        $branch: {
            main: "wss://CoCreateJS.com",
            dev: "wss://dev.CoCreateJS.com",
            test: "wss://test.CoCreateJS.com"
        }
    },
    directories: [
        {
            entry: "./dist",
            exclude: [".txt"],
            array: "files",
            object: {
                name: "{{name}}",
                src: "{{source}}",
                host: ["*"],
                directory: "{{directory}}",
                path: "{{path}}",
                pathname: "{{pathname}}",
                "content-type": "{{content-type}}",
                public: "true"
            }
        },
        {
            entry: "./docs",
            exclude: ["demo"],
            array: "files",
            object: {
                name: "{{name}}",
                src: "{{source}}",
                host: ["*"],
                directory: "{{directory}}",
                path: "{{path}}",
                pathname: "{{pathname}}",
                "content-type": "{{content-type}}",
                public: "true"
            }
        }
    ],
    sources: [
        {
            array: "demos",
            object: {
                _id: "619aa8e8a8b6b4001a9dc24e",
                "input-demo": "{{./demo/elements/input.html}}",
                "textarea-demo": "{{./demo/elements/textarea.html}}",
                "contenteditable-demo": "{{./demo/elements/contenteditable.html}}",
                "checkbox-demo": "{{./demo/elements/checkbox.html}}",
                "radio-demo": "{{./demo/elements/radio.html}}",
                "select-demo": "{{./demo/elements/select.html}}",
                "form-demo": "{{./demo/elements/form.html}}",
                "actions-demo": "{{./demo/elements/actions.html}}",
                "fetch-demo": "{{./demo/templating/fetch.html}}",
                "filter-demo": "{{./demo/templating/filter.html}}",
                "state-attributes-demo": "{{./demo/logic/state-attributes.html}}",
                "state-values-demo": "{{./demo/logic/state-values.html}}",
                "conditional-logic-demo": "{{./demo/logic/conditional-logic.html}}",
                "signup-demo": "{{./demo/user-management/signup.html}}",
                "signin-demo": "{{./demo/user-management/signin.html}}",
                "signout-demo": "{{./demo/user-management/signout.html}}"
            }
        }
    ],

    /**
     * @property {string} moduleOutputPath
     * @description Defines the destination file path where the build system (e.g., ModuleGenerator Webpack plugin) 
     * will save the dynamically generated module entry file. This file contains the automated import and lazy-loading logic.
     */
    moduleOutputPath: "./CoCreate.index.js",

    /**
     * @namespace modules
     * @description Contains core component configurations.
     * * The 'import' property defines the package import path for the module.
     * * The 'selector' property is designed so that when the module is built with the project's core, 
     * it observes the DOM for elements matching the selector and lazy-loads the required module dynamically.
     * * For development environments, the Poly Repo CLI (initiated via the 'coc' command) reads the 'path' and 'repo' keys from these objects, merging them with 'projects' to perform cross-repository git and build commands.
     * * @property {string} import - The package import path.
     * @property {string} [selector] - CSS selector used for DOM observation and lazy loading.
     * @property {string} [path] - Local relative workspace path. Defines the workspace tree structure, determining where the repository is cloned in a new environment so the CLI can locate it during operations.
     * @property {string} [repo] - Git repository URL.
     * @property {string[]} [exclude] - Array of strings used to exclude the module from specific CLI commands.
     */
    modules: {
        "element-prototype": {
            import: "@cocreate/element-prototype",
            path: "../CoCreate-modules/element-prototype",
            repo: "github.com/cocreatejs/CoCreate-element-prototype.git"
        },
        observer: {
            import: "@cocreate/observer",
            path: "../CoCreate-modules/observer",
            repo: "github.com/cocreatejs/CoCreate-observer.git"
        },
        indexeddb: {
            import: "@cocreate/indexeddb",
            selector: "[storage*='indexeddb']",
            path: "../CoCreate-storages/indexeddb",
            repo: "github.com/cocreatejs/CoCreate-indexeddb.git"
        },
        localstorage: {
            import: "@cocreate/local-storage",
            selector: "[storage*='localstorage'], [localstorage-set], [localstorage-get]",
            path: "../CoCreate-modules/local-storage",
            repo: "github.com/cocreatejs/CoCreate-local-storage.git"
        },
        config: {
            import: "@cocreate/config",
            path: "../CoCreate-modules/config",
            repo: "github.com/cocreatejs/CoCreate-config.git"
        },
        socket: {
            import: "@cocreate/socket-client",
            selector: "[socket='true']",
            path: "../CoCreate-modules/socket-client",
            repo: "github.com/cocreatejs/CoCreate-socket-client.git"
        },
        events: {
            import: "@cocreate/events",
            path: "../CoCreate-modules/events",
            repo: "github.com/cocreatejs/CoCreate-events.git"
        },
        crud: {
            import: "@cocreate/crud-client",
            selector: "[crud='true'], [database], [array]",
            path: "../CoCreate-modules/crud-client",
            repo: "github.com/cocreatejs/CoCreate-crud-client.git"
        },
        crdt: {
            import: "@cocreate/crdt",
            selector: "[crdt='true']",
            path: "../CoCreate-modules/crdt",
            repo: "github.com/cocreatejs/CoCreate-crdt.git"
        },
        state: {
            import: "@cocreate/state",
            selector: "link[state_to][state_id][key], link[parse]",
            path: "../CoCreate-modules/state",
            repo: "github.com/cocreatejs/CoCreate-state.git"
        },
        aria: {
            import: "@cocreate/aria",
            selector: "[aria-controls], [aria-selected]",
            path: "../CoCreate-modules/aria",
            repo: "github.com/cocreatejs/CoCreate-aria.git"
        },
        cache: {
            import: "@cocreate/cache",
            selector: "[cache='true']",
            path: "../CoCreate-modules/cache",
            repo: "github.com/cocreatejs/CoCreate-cache.git"
        },
        pwa: {
            import: "@cocreate/pwa",
            path: "../CoCreate-modules/pwa",
            repo: "github.com/cocreatejs/CoCreate-pwa.git"
        },
        organizations: {
            import: "@cocreate/organizations",
            path: "../CoCreate-modules/organizations",
            repo: "github.com/cocreatejs/CoCreate-organizations.git"
        },
        cssParser: {
            import: "@cocreate/css-parser",
            selector: "link[array][object][key], link[parse]",
            path: "../CoCreate-modules/css-parser",
            repo: "github.com/cocreatejs/CoCreate-css-parser.git"
        },
        actions: {
            import: "@cocreate/actions",
            selector: "[actions]",
            path: "../CoCreate-modules/actions",
            repo: "github.com/cocreatejs/CoCreate-actions.git"
        },
        filter: {
            import: "@cocreate/filter",
            selector: "[filter-query]",
            path: "../CoCreate-modules/filter",
            repo: "github.com/cocreatejs/CoCreate-filter.git"
        },
        render: {
            import: "@cocreate/render",
            selector: "[render], [render-query], [template], template",
            path: "../CoCreate-modules/render",
            repo: "github.com/cocreatejs/CoCreate-render.git"
        },
        file: {
            import: "@cocreate/file",
            selector: "[type='file'], [actions*='upload'], [actions*='download'], [actions*='saveLocally'], [actions*='import'], [actions*='export'], [actions*='createFile'], [actions*='deleteFile'], [actions*='createDirectory'], [actions*='deleteDirectory']",
            path: "../CoCreate-modules/file",
            repo: "github.com/cocreatejs/CoCreate-file.git"
        },
        elements: {
            import: "@cocreate/elements",
            selector: "form, [src], [storage], [database], [array]",
            path: "../CoCreate-modules/elements",
            repo: "github.com/cocreatejs/CoCreate-elements.git"
        },
        api: {
            import: "@cocreate/api",
            selector: "[actions], [template_id]",
            path: "../CoCreate-modules/api",
            repo: "github.com/cocreatejs/CoCreate-api.git"
        },
        plugins: {
            import: "@cocreate/plugins",
            selector: "[plugin]",
            path: "../CoCreate-modules/plugins",
            repo: "github.com/cocreatejs/CoCreate-plugins.git"
        },
        position: {
            import: "@cocreate/position",
            selector: "[positionable], [moveable]",
            path: "../CoCreate-modules/position",
            repo: "github.com/cocreatejs/CoCreate-position.git"
        },
        scroll: {
            import: "@cocreate/scroll",
            selector: "[scroll], [scroll-to], [scrollable-x], [scrollable-y]",
            path: "../CoCreate-modules/scroll",
            repo: "github.com/cocreatejs/CoCreate-scroll.git"
        },
        resize: {
            import: "@cocreate/resize",
            selector: "[resize], [height='auto']",
            path: "../CoCreate-modules/resize",
            repo: "github.com/cocreatejs/CoCreate-resize.git"
        },
        users: {
            import: "@cocreate/users",
            selector: "[session], [actions*='signUp'], [actions*='signIn'], [actions*='signOut'], [user-status]",
            path: "../CoCreate-modules/users",
            repo: "github.com/cocreatejs/CoCreate-users.git"
        },
        search: {
            import: "@cocreate/search",
            selector: "[search_id]",
            path: "../CoCreate-modules/search",
            repo: "github.com/cocreatejs/CoCreate-search.git"
        },
        elementConfig: {
            import: "@cocreate/element-config",
            selector: "[config-query]",
            path: "../CoCreate-modules/element-config",
            repo: "github.com/cocreatejs/CoCreate-element-config.git"
        },
        validation: {
            import: "@cocreate/validation",
            selector: "[actions*='validate'], [required]",
            path: "../CoCreate-modules/validation",
            repo: "github.com/cocreatejs/CoCreate-validation.git"
        },
        cursors: {
            import: "@cocreate/cursors",
            selector: "input, textarea, [contenteditable]",
            path: "../CoCreate-modules/cursors",
            repo: "github.com/cocreatejs/CoCreate-cursors.git"
        },
        editor: {
            import: "@cocreate/editor",
            selector: "[editor], code[language], [contenteditable]:not([contenteditable=\"false\"]), input[crdt=\"true\"], textarea[crdt=\"true\"], iframe[crdt=\"true\"]",
            path: "../CoCreate-modules/editor",
            repo: "github.com/cocreatejs/CoCreate-editor.git"
        },
        clipboard: {
            import: "@cocreate/clipboard",
            selector: "[actions*='clipboard'], [clipboard-query]",
            path: "../CoCreate-modules/clipboard",
            repo: "github.com/cocreatejs/CoCreate-clipboard.git"
        },
        print: {
            import: "@cocreate/print",
            selector: "[actions*='print'], [print-query]",
            path: "../CoCreate-modules/print",
            repo: "github.com/cocreatejs/CoCreate-print.git"
        },
        fullscreen: {
            import: "@cocreate/fullscreen",
            selector: "[fullscreen]",
            path: "../CoCreate-modules/fullscreen",
            repo: "github.com/cocreatejs/CoCreate-fullscreen.git"
        },
        notification: {
            import: "@cocreate/notification",
            selector: "[actions*='notification']",
            path: "../CoCreate-modules/notification",
            repo: "github.com/cocreatejs/CoCreate-notification.git"
        },
        cli: {
            path: "../CoCreate-modules/cli",
            repo: "github.com/cocreatejs/CoCreate-cli.git",
            // exclude: ["git"]
        },
        docs: {
            path: "../CoCreate-modules/docs",
            repo: "github.com/cocreatejs/CoCreate-docs.git"
        },
        "lazy-loader": {
            path: "../CoCreate-modules/lazy-loader",
            repo: "github.com/cocreatejs/CoCreate-lazy-loader.git"
        },
        "scrollbar": {
            path: "../CoCreate-modules/scrollbar",
            repo: "github.com/cocreatejs/CoCreate-scrollbar.git"
        },
        webpack: {
            path: "../CoCreate-plugins/webpack",
            repo: "github.com/cocreatejs/CoCreate-webpack.git"
        }
    },

    /**
     * @namespace plugins
     * @description External plugins (CDN links, styling) and associated configurations.
     * Used to define external dependencies and their JS and CSS sources.
     * * IMPORTANT: The key for each plugin (e.g., 'Toastify', 'Quill') MUST be the exact 
     * global reference name used by the plugin. The system uses this exact key to dynamically 
     * access the object and initialize the plugin once fetched. This allows any plugin to be 
     * seamlessly whitelisted, configured, and initialized dynamically via HTML attributes or inline scripts.
     */
    plugins: {
        Toastify: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/toastify-js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"]
        },
        flatpickr: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/flatpickr", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"]
        },
        GLightbox: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css"]
        },
        FgEmojiPicker: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/fg-emoji-picker/fgEmojiPicker.js", crossOrigin: "anonymous" }]
        },
        bootstrap: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", crossOrigin: "anonymous" }]
        },
        Waves: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/node-waves/dist/waves.min.js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/node-waves/dist/waves.min.css"]
        },
        ApexCharts: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/apexcharts", crossOrigin: "anonymous" }]
        },
        jsVectorMap: {
            js: [
                { src: "https://cdn.jsdelivr.net/npm/jsvectormap", crossOrigin: "anonymous" },
                { src: "https://cdn.jsdelivr.net/npm/jsvectormap/dist/maps/world.js", crossOrigin: "anonymous" }
            ],
            css: ["https://cdn.jsdelivr.net/npm/jsvectormap/dist/css/jsvectormap.min.css"]
        },
        Swiper: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"]
        },
        Swal: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/sweetalert2@11", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css"]
        },
        FullCalendar: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/fullcalendar@6.1.15/index.global.min.js", crossOrigin: "anonymous" }]
        },
        Cleave: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/cleave.js/dist/cleave.min.js", crossOrigin: "anonymous" }]
        },
        noUiSlider: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/nouislider/dist/nouislider.min.js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/nouislider/dist/nouislider.min.css"]
        },
        wNumb: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/wnumb/wNumb.min.js", crossOrigin: "anonymous" }]
        },
        FilePond: {
            js: [
                { src: "https://unpkg.com/filepond/dist/filepond.min.js", crossOrigin: "anonymous" },
                { src: "https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.js", crossOrigin: "anonymous" },
                { src: "https://unpkg.com/filepond-plugin-file-validate-size/dist/filepond-plugin-file-validate-size.min.js", crossOrigin: "anonymous" },
                { src: "https://unpkg.com/filepond-plugin-image-exif-orientation/dist/filepond-plugin-image-exif-orientation.min.js", crossOrigin: "anonymous" },
                { src: "https://unpkg.com/filepond-plugin-file-encode/dist/filepond-plugin-file-encode.min.js", crossOrigin: "anonymous" }
            ],
            css: [
                "https://unpkg.com/filepond/dist/filepond.min.css",
                "https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css"
            ]
        },
        Prism: {
            js: [
                { src: "https://cdn.jsdelivr.net/npm/prismjs/prism.min.js", crossOrigin: "anonymous" },
                { src: "https://cdn.jsdelivr.net/npm/prismjs/plugins/autoloader/prism-autoloader.min.js", crossOrigin: "anonymous" }
            ],
            css: ["https://cdn.jsdelivr.net/npm/prismjs/themes/prism.min.css"]
        },
        Isotope: {
            js: [{ src: "https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js", crossOrigin: "anonymous" }]
        },
        particlesJS: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js", crossOrigin: "anonymous" }]
        },
        Card: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/card/dist/card.js", crossOrigin: "anonymous" }]
        },
        Chart: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/chart.js", crossOrigin: "anonymous" }]
        },
        echarts: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js", crossOrigin: "anonymous" }]
        },
        autoComplete: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@10.2.7/dist/autoComplete.min.js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@10.2.7/dist/css/autoComplete.01.min.css"]
        },
        Pickr: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/pickr.min.js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/themes/classic.min.css"]
        },
        Shepherd: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/shepherd.js/dist/js/shepherd.min.js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/shepherd.js/dist/css/shepherd.css"]
        },
        GMaps: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/gmaps/gmaps.min.js", crossOrigin: "anonymous" }]
        },
        L: {
            js: [{ src: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js", crossOrigin: "anonymous" }],
            css: ["https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"]
        },
        Masonry: {
            js: [{ src: "https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js", crossOrigin: "anonymous" }]
        },
        Anime: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.min.js", crossOrigin: "anonymous" }]
        }
    },

    /**
     * @namespace projects
     * @description Standalone apps, environments, or platforms integrated with the Poly Repo CLI.
     * * The Poly Repo CLI (initiated via the 'coc' command) merges the repo details from 'projects' and 'modules' 
     * (excluding 'plugins') to execute cross-repository actions seamlessly.
     * * @property {string} path - Local relative workspace path. Defines the workspace tree structure, determining where the repository is cloned in a new environment so the CLI can locate it during operations.
     * @property {string} repo - Git repository URL.
     * @property {string[]} [exclude] - Array of strings used to exclude the project from specific CLI commands (e.g., ["git"] or ["fs/webpack"]).
     */
    projects: {
        client: {
            path: "../CoCreate-client",
            repo: "github.com/CoCreateJS/CoCreate-client.git",
            exclude: ["git"]
        },
        app: {
            path: "../CoCreate-app",
            repo: "github.com/cocreatejs/CoCreate-app.git",
            exclude: ["git"]
        },
        website: {
            path: "../CoCreate-website",
            repo: "github.com/CoCreateJS/CoCreate-website.git",
            exclude: ["git"]
        }
    }
};
