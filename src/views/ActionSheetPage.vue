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
                <ion-button expand="block" @click="open">Open Action Sheet</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
    actionSheetController,
    IonPage,
    IonContent,
    IonBackButton,
    IonTitle,
    IonHeader,
    IonButton,
    IonToolbar,
    IonButtons,
} from '@ionic/vue';

export default defineComponent({
    components: {
        IonPage, IonContent, IonBackButton, IonTitle, IonHeader,
        IonButton, IonToolbar, IonButtons,
    },
    setup() {
        return {
            title: 'Action Sheet',
            open() {
                return actionSheetController
                    .create({
                        header: 'Albums',
                        buttons: [
                            {
                                text: 'Delete',
                                role: 'destructive',
                                handler: () => {
                                    console.log('Delete clicked');
                                },
                            },
                            {
                                text: 'Share',
                                role: 'share',
                                handler: () => {
                                    console.log('Share clicked');
                                },
                            },
                            {
                                text: 'Play (open modal)',
                                role: 'play',
                                handler: () => {
                                    console.log('Play clicked');
                                },
                            },
                            {
                                text: 'Favorite',
                                role: 'favorite',
                                handler: () => {
                                    console.log('Favorite clicked');
                                },
                            },
                            {
                                text: 'Cancel',
                                role: 'cancel',
                                handler: () => {
                                    console.log('Cancel clicked');
                                },
                            },
                        ],
                    })
                    .then(a => {
                        a.present();
                        return a.onDidDismiss();
                    })
                    .then((ev) => {
                        console.log(ev);
                    });
            },
        };
    },
});
</script>

<style lang="scss" scoped>

</style>
