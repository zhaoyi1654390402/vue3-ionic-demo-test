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
        <ion-content class="ion-padding">
            <ion-fab horizontal="end" vertical="top" slot="fixed" edge>
                <ion-fab-button>
                    <ion-icon name="add"></ion-icon>
                </ion-fab-button>
                <ion-fab-list>
                    <ion-fab-button color="light">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </ion-fab-button>
                    <ion-fab-button color="light">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </ion-fab-button>
                    <ion-fab-button color="light">
                        <ion-icon name="logo-vimeo"></ion-icon>
                    </ion-fab-button>
                </ion-fab-list>
            </ion-fab>
            <ion-fab horizontal="end" vertical="center" slot="fixed">
                <ion-fab-button color="danger">
                    <ion-icon name="add"></ion-icon>
                </ion-fab-button>
            </ion-fab>
            <ion-fab horizontal="center" vertical="center" slot="fixed">
                <ion-fab-button color="light">
                    <ion-icon name="share"></ion-icon>
                </ion-fab-button>
                <ion-fab-list side="top">
                    <ion-fab-button color="primary">
                        <ion-icon name="logo-vimeo"></ion-icon>
                    </ion-fab-button>
                </ion-fab-list>
                <ion-fab-list side="end">
                    <ion-fab-button color="dark">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </ion-fab-button>
                </ion-fab-list>
                <ion-fab-list side="bottom">
                    <ion-fab-button color="secondary">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </ion-fab-button>
                </ion-fab-list>
                <ion-fab-list side="start">
                    <ion-fab-button color="light">
                        <ion-icon name="logo-google"></ion-icon>
                    </ion-fab-button>
                </ion-fab-list>
            </ion-fab>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonFab,
    IonFabList,
    IonIcon,
    IonFabButton,
} from '@ionic/vue';

export default defineComponent({
    components: {
        IonPage,
        IonContent,
        IonHeader,
        IonToolbar,
        IonButtons,
        IonBackButton,
        IonTitle,
        IonFab,
        IonFabList,
        IonIcon,
        IonFabButton,
    },
    setup() {
        const title = 'Fab Button';
        return {
            title,
        };
    },
});
</script>

<style lang="scss" scoped>

</style>
