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
                <ion-button expand="block" @click="showPopover">Open Popover</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { popoverController } from '@ionic/vue';
import PopoverExamplePage from '../components/PopoverExamplePage.vue';
import {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonContent,
    IonButton,
    IonLabel,
} from '@ionic/vue';

export default defineComponent({
    components: {
        IonPage,
        IonHeader,
        IonTitle,
        IonToolbar,
        IonButtons,
        IonBackButton,
        IonContent,
        IonButton,
        IonLabel,
    },
    setup() {
        const title = 'Popover';
        const showPopover = async (event: MouseEvent) => {
            const popover = await popoverController.create({
                component: PopoverExamplePage,
                event,
                translucent: true,
            });
            return popover.present();
        };
        return {
            title,
            showPopover,
        };
    },
});
</script>

<style lang="scss" scoped>

</style>
