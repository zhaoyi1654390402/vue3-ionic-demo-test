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
        <ion-content ref="content" :scroll-events="true" @ionScroll="onscroll">
            <p class="ion-padding-start ion-padding-end">
                <ion-button @click="scrollToBottom" expand="block" fill="outline">Scroll To Bottom</ion-button>
            </p>
            <template v-for="(_,i) in list" :key="i">
                <ion-item>
                    <ion-label>Item {{ i }}</ion-label>
                </ion-item>
            </template>
            <p class="ion-padding-start ion-padding-end">
                <ion-button @click="scrollToTop" expand="block" fill="outline">Scroll To Top</ion-button>
            </p>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, Ref, ref } from 'vue';
import {
    IonPage,
    IonContent,
    IonButtons,
    IonButton,
    IonLabel,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonBackButton,
    IonItem,
} from '@ionic/vue';
import type { Components } from '@ionic/core';

export default defineComponent({
    components: {
        IonPage, IonContent, IonButtons, IonButton, IonLabel, IonHeader, IonToolbar, IonTitle,
        IonBackButton, IonItem,
    },
    setup() {
        const title = 'Content';
        const list = new Array(30).fill(0);
        const vm = getCurrentInstance()!;
        const content: Ref<typeof IonContent | null> = ref(null);
        const getContent = () => {
            return content.value!.$el as Components.IonContent;
        };
        const scrollToBottom = () => {
            getContent().scrollToBottom(500);
        };
        const scrollToTop = () => {
            getContent().scrollToTop(500);
        };
        const onscroll = (ev: Event) => {
            console.log(ev);
        };
        return {
            title,
            list,
            content,
            scrollToBottom,
            scrollToTop,
            onscroll,
        };
    },
});
</script>

<style lang="scss" scoped>

</style>
