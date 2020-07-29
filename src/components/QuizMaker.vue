<template>
    <div class="quizMaker mx-12">
        
        <h2 class="heading-6 teal--text mt-7 "> New Quiz</h2>

        <v-container class="mx-7 my-5">
            <v-row justify="">
                <v-col cols="12"  md="4"   >
                    <v-form ref="form">
                    <v-text-field
                        v-model="model"
                        
                        label="Quiz Topic"
                    ></v-text-field>
                    </v-form>
                    <app-add-question-popup></app-add-question-popup>
                </v-col>

            
            </v-row>
        </v-container>

        
        
        
    </div>
</template>

<script>
    import addQuestionPopup from './addQuestionPopup'
    export default {
        components :{
            
            appAddQuestionPopup: addQuestionPopup

        }
        
    }
</script>


<style>
    
</style>