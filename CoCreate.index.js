import { dependency, lazyLoad } from '@cocreate/lazy-loader';

if (typeof window !== 'undefined') {
    window.CoCreateConfig = window.CoCreateConfig || {};
    window.CoCreateConfig.plugins = Object.assign(
        {},
        window.CoCreateConfig.plugins || {},
        {}
    );
}

