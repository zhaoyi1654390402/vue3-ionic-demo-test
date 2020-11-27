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
                <ion-button expand="block" @click="toast">toast</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import {defineComponent, ref, Ref, reactive} from 'vue';
import {
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonButton,
    toastController
} from '@ionic/vue';

export default defineComponent({
    components: {
        IonPage,
        IonContent,
        IonHeader,
        IonTitle,
        IonToolbar,
        IonButtons,
        IonBackButton,
        IonButton,
    },
    setup() {
        const title = 'Toast';
        const toast = () => {
            toastController
                .create({
                    message: 'toast message',
                    duration: 2000,
                })
                .then(t => t.present());
        }
        return {
            title,
            toast
        };
    },
});
</script>

<style lang="scss" scoped>

</style>