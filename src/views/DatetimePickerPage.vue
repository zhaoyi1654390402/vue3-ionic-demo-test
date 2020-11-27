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
                    <ion-input placeholder="Title"></ion-input>
                </ion-item>
                <ion-item lines="full">
                    <ion-input placeholder="Location"></ion-input>
                </ion-item>
                <ion-item-divider></ion-item-divider>
                <ion-item>
                    <ion-label>Start Date</ion-label>
                    <ion-datetime value="1990-02-19" placeholder="Select Date"></ion-datetime>
                </ion-item>
                <ion-item>
                    <ion-label>Start Time</ion-label>
                    <ion-datetime display-format="h:mm A" picker-format="h:mm A"
                                  value="1990-02-19T07:43Z"></ion-datetime>
                </ion-item>
                <ion-item>
                    <ion-label>Ends</ion-label>
                    <ion-datetime value="1990-02-20" placeholder="Select Date"></ion-datetime>
                </ion-item>
                <ion-item>
                    <ion-label>Repeat</ion-label>
                    <ion-datetime placeholder="Never" disabled></ion-datetime>
                </ion-item>
                <ion-item lines="full">
                    <ion-label>Travel Time</ion-label>
                    <ion-datetime placeholder="None" disabled></ion-datetime>
                </ion-item>
                <ion-item-divider></ion-item-divider>
                <ion-item lines="full">
                    <ion-label>Alert</ion-label>
                    <ion-datetime placeholder="None" disabled></ion-datetime>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import {
    IonPage,
    IonContent,
    IonList,
    IonDatetime,
    IonLabel,
    IonItem,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonInput,
    IonItemDivider,
} from '@ionic/vue';

@Options({
    components: {
        IonPage,
        IonContent,
        IonList,
        IonDatetime,
        IonLabel,
        IonItem,
        IonHeader,
        IonToolbar,
        IonButtons,
        IonBackButton,
        IonTitle,
        IonInput,
        IonItemDivider,
    },
})
export default class DatetimePickerPage extends Vue {
    title = 'DatetimePicker';
}
</script>

<style lang="scss" scoped>

</style>
