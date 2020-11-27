<template>
    <ion-page>
        <ion-content class="ion-padding-start" ref="content">
            <div style="padding-right: 16px;">
                <ion-item>
                    <ion-label position="floating">用户名</ion-label>
                    <ion-input @ionInput="model.username = $event"/>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">密码</ion-label>
                    <ion-input @ionInput="model.password = $event"/>
                </ion-item>
            </div>
            <div style="padding: 20px 16px;">
                <ion-button expand="block" @click="login">登录</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonItem, IonButton, IonInput, IonLabel } from '@ionic/vue';
import { defineComponent, reactive, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    components: {
        IonPage,
        IonContent,
        IonItem,
        IonButton,
        IonInput,
        IonLabel,
    },
    setup() {
        const model = reactive({
            username: '',
            password: '',
        });
        const router = useRouter();
        const vm = getCurrentInstance();

        function login() {
            router.push({
                name: 'home',
            });
        }

        return {
            model,
            login,
        };
    },
});
</script>


