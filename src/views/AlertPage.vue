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
                <ion-button expand="block" @click="open">Open Alert</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    IonButton,
    alertController,
} from '@ionic/vue';

export default defineComponent({
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonButtons,
        IonBackButton,
        IonTitle,
        IonContent,
        IonButton,
    },
    setup() {
        const title = 'AlertPage.vue';
        const open = async () => {
            const alert = await alertController.create({
                header: 'Use this lightsaber?',
                message: 'Do you agree to use this lightsaber to do good across the galaxy?',
                buttons: [
                    {
                        text: '取消',
                        role: 'cancel',
                    },
                    {
                        text: '确认',
                        role: 'sure',
                    },
                ],
            });
            await alert.present();
            console.log(await alert.onDidDismiss());
        };
        return {
            title,
            open,
        };
    },
});
</script>

<style lang="scss" scoped>

</style>
