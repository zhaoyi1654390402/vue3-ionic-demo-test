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
            <pre style="background: #333;color: #fff;padding: 10px;">
import {
    addIcons
} from 'ionicons';
import {
    logoIonic
} from 'ionicons/icons';

addIcons({
    'logo-ionic':logoIonic
});
            </pre>
            <ion-icon name="logo-ionic"></ion-icon>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
    IonPage,
    IonContent,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonBackButton,
    IonButtons,
} from '@ionic/vue';

export default defineComponent({
    components: {
        IonPage,
        IonContent,
        IonIcon,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonBackButton,
        IonButtons,
    },
    setup() {
        const title = 'Icons';
        return {
            title,
        };
    },
});
</script>

<style lang="scss" scoped>

</style>
