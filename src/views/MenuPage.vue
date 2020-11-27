<template>
    <ion-page id="menu-page">
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/home"/>
                </ion-buttons>
                <ion-title>{{ title }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-button expand="block" @click="openMenu">Open Menu</ion-button>
        </ion-content>
        <ion-menu side="start" content-id="menu-page">
            <ion-header>
                <ion-toolbar>
                    <ion-title>Menu</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-list>
                    <ion-item>
                        <ion-icon name="home" slot="start"></ion-icon>
                        <ion-label>Home</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-icon name="person" slot="start"></ion-icon>
                        <ion-label>Profile</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-icon name="chatbubbles" slot="start"></ion-icon>
                        <ion-label>Messages</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-icon name="settings" slot="start"></ion-icon>
                        <ion-label>Settings</ion-label>
                    </ion-item>
                </ion-list>
            </ion-content>
        </ion-menu>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { menuController } from '@ionic/vue';
import {
    IonPage,
    IonMenu,
    IonContent,
    IonList,
    IonIcon,
    IonItem,
    IonLabel,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonButton,
} from '@ionic/vue';

export default defineComponent({
    components: {
        IonPage,
        IonMenu,
        IonContent,
        IonList,
        IonIcon,
        IonItem,
        IonLabel,
        IonHeader,
        IonTitle,
        IonToolbar,
        IonBackButton,
        IonButtons,
        IonButton,
    },
    setup() {
        const title = 'Menu';
        const openMenu = () => menuController.open();
        return {
            title,
            openMenu,
        };
    },
});
</script>

<style lang="scss" scoped>

</style>
