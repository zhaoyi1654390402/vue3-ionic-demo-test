<template>
    <ion-list>
        <ion-list-header>
            <ion-label>Ionic</ion-label>
        </ion-list-header>
        <ion-item button>Learn Ionic</ion-item>
        <ion-item button>Documentation</ion-item>
        <ion-item button>Showcase</ion-item>
        <ion-item button>GitHub Repo</ion-item>
    </ion-list>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, reactive } from 'vue';
import { IonList, IonListHeader, IonItem, IonLabel } from '@ionic/vue';

export default defineComponent({
    components: {
        IonList, IonListHeader, IonItem, IonLabel,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="scss" scoped>

</style>
