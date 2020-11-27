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
            <ion-list>
                <ion-item>
                    <ion-label>Blueberry</ion-label>
                    <ion-toggle slot="start" name="blueberry" checked></ion-toggle>
                </ion-item>

                <ion-item>
                    <ion-label>Apple</ion-label>
                    <ion-toggle slot="start" name="apple" color="secondary" checked></ion-toggle>
                </ion-item>

                <ion-item>
                    <ion-label>Grape</ion-label>
                    <ion-toggle slot="start" name="grape" color="tertiary" checked></ion-toggle>
                </ion-item>

                <ion-item>
                    <ion-label>Kiwi</ion-label>
                    <ion-toggle slot="start" name="kiwi" color="success" checked></ion-toggle>
                </ion-item>

                <ion-item>
                    <ion-label>Orange</ion-label>
                    <ion-toggle slot="start" name="banana" color="warning" checked></ion-toggle>
                </ion-item>

                <ion-item>
                    <ion-label>Cherry</ion-label>
                    <ion-toggle slot="start" name="cherry" color="danger" checked></ion-toggle>
                </ion-item>

                <ion-item>
                    <ion-label>Banana</ion-label>
                    <ion-toggle slot="start" name="banana" color="light" checked></ion-toggle>
                </ion-item>

                <ion-item>
                    <ion-label>Cantaloupe</ion-label>
                    <ion-toggle slot="start" name="cantaloupe" color="medium" checked></ion-toggle>
                </ion-item>

                <ion-item>
                    <ion-label>Blackberry</ion-label>
                    <ion-toggle slot="start" name="blackberry" color="dark" checked></ion-toggle>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, reactive } from 'vue';
import {
    IonPage,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonToggle,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonBackButton,
    IonButtons,
} from '@ionic/vue';

export default defineComponent({
    components: {
        IonPage,
        IonContent,
        IonList,
        IonItem,
        IonLabel,
        IonToggle,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButton,
        IonBackButton,
        IonButtons,
    },
    setup() {
        const title = 'Toggle';

        return {
            title,
        };
    },
});
</script>

<style lang="scss" scoped>

</style>
