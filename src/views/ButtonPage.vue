<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/home"/>
                </ion-buttons>
                <ion-title>{{ title }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding-start ion-padding-end">
            <section>
                <ion-list-header>
                    <ion-label>
                        Small Size
                    </ion-label>
                </ion-list-header>
                <ion-button size="small">Default</ion-button>
                <ion-button size="small" color="secondary">Secondary</ion-button>
                <ion-button size="small" color="tertiary">Tertiary</ion-button>
            </section>

            <section>
                <ion-list-header>
                    <ion-label>
                        Default Size
                    </ion-label>
                </ion-list-header>
                <ion-button color="success">Success</ion-button>
                <ion-button color="warning">Warning</ion-button>
                <ion-button color="danger">Danger</ion-button>
            </section>

            <section>
                <ion-list-header>
                    <ion-label>
                        Large Size
                    </ion-label>
                </ion-list-header>
                <ion-button size="large" color="light">Light</ion-button>
                <ion-button size="large" color="medium">Medium</ion-button>
                <ion-button size="large" color="dark">Dark</ion-button>
            </section>

            <section>
                <ion-list-header>
                    <ion-label>
                        Block Width
                    </ion-label>
                </ion-list-header>
                <ion-button expand="block">A block button</ion-button>
            </section>

            <section>
                <ion-list-header>
                    <ion-label>
                        Full Width
                    </ion-label>
                </ion-list-header>
                <ion-button expand="full" color="secondary">A full-width button</ion-button>
            </section>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import {
    IonPage,
    IonHeader,
    IonContent,
    IonButton,
    IonButtons,
    IonToolbar,
    IonListHeader,
    IonLabel,
    IonBackButton,
    IonTitle,
} from '@ionic/vue';

export default defineComponent({
    components: {
        IonPage, IonHeader, IonContent, IonButton, IonButtons,
        IonToolbar, IonListHeader, IonLabel, IonBackButton, IonTitle,
    },
    setup() {
        return {
            title: 'ButtonPage.vue',
        };
    },
});
</script>

<style lang="scss" scoped>

</style>
