<template>
    <div>
        <label :for="name" class="mb-0">{{ label }}</label>

        <vue-select
            v-model="selected"
            :id="name"
            :name="name"
            :required="required"
            :options="makeOptions(options.rows)"
            :disabled="disabled()"
            :placeholder="placeholder()"
        >
        </vue-select>

        <small class="text-danger" v-if="form.errors.has(name)">
            {{ form.errors.get(name) }}
        </small>
    </div>
</template>

<script>
export default {
    props: ['value', 'name', 'label', 'required', 'form', 'options'],

    methods: {
        makeOptions(rows) {
            return _.map(rows, value => {
                return this.makeObject(value)
            })
        },

        select(value) {
            this.$emit('input', value)
        },

        findById(id) {
            if (!this.options) {
                return { name: null, id: null }
            }

            return _.find(this.options.rows, value => {
                return value.id === id
            })
        },

        makeObject(value) {
            if (!value) {
                return null
            }

            return { label: value.name, value: value.id }
        },

        disabled() {
            return this.options.length === 0
        },

        placeholder() {
            return this.options.length === 0 ? 'NENHUM ITEM DISPONÍVEL' : ''
        }
    },

    computed: {
        selected: {
            get() {
                return this.makeObject(this.findById(this.value))
            },
            set(item) {
                if (!item) {
                    return this.$emit('input', null)
                }else {
                    return this.$emit('input', item.value)
                }
            }
        }
    }
}
</script>
