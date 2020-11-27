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
        <ion-content>
            <div class="ion-padding">
                <ion-button expand="block" @click="open">Open Loading</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { loadingController } from '@ionic/vue';
import {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonButton,
} from '@ionic/vue';

export default defineComponent({
    components: {
        IonPage,
        IonContent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonBackButton,
        IonButton,
    },
    setup() {
        const title = 'Loading';
        return {
            title,
            async open() {
                const loading = await loadingController
                    .create({
                        message: 'Please wait...',
                        duration: 3000,
                    });
                await loading.present();
            },
        };
    },
});
</script>

<style lang="scss" scoped>

</style>
