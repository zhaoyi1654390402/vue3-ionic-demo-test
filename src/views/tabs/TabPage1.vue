<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/home"/>
                </ion-buttons>
                <ion-title>tab-1</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            tab-1
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonButtons,
    IonBackButton,
    IonPage,
    IonHeader,
    IonItem,
    IonToolbar,
    IonTitle,
    IonContent
} from '@ionic/vue';

export default {
    name: 'Tab1',
    components: {
        IonButtons,
        IonBackButton,
        IonHeader,
        IonItem,
        IonToolbar,
        IonTitle,
        IonContent,
        IonPage
    }
}
</script>