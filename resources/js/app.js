import '../css/app.css';
import './bootstrap';
import '../css/tailwind.css'

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import Swal from 'sweetalert2';
import { usePage } from '@inertiajs/vue3';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

const app = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${app}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        const app = createApp({ 
            render: () => h(App, props),
            mounted() {
                // Watch for flash messages after navigation
                this.$watch(
                    () => usePage().props.flash,
                    (flash) => {
                        if (flash?.error) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Access Denied',
                                text: flash.error,
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                                background: '#F87171',
                                color: '#FFFFFF',
                                customClass: {
                                    popup: 'colored-toast'
                                },
                            });
                        }
                    },
                    { immediate: true }
                );
            }
        });

        app.use(plugin)
           .use(ZiggyVue)
           .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});

// Add global styles for SweetAlert
const style = document.createElement('style');
style.textContent = `
    .colored-toast.swal2-icon-error {
        background-color: #F87171 !important;
    }
    .colored-toast {
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    }
    .colored-toast .swal2-title,
    .colored-toast .swal2-close,
    .colored-toast .swal2-html-container {
        color: white;
    }
`;
document.head.appendChild(style);