<template>
    <span
        :class="
            type === 'checkbox' ? (inline ? '' : 'form-check') + ' m-4' : ''
        "
        style="white-space: nowrap"
    >
        <label v-if="type !== 'checkbox'" :for="name" class="mb-0 mt-4">{{
            label
        }}</label>

        <input
            :value="value"
            @input="
                type !== 'checkbox' ? $emit('input', $event.target.value) : null
            "
            @change="
                type === 'checkbox'
                    ? $emit('input', $event.target.checked)
                    : null
            "
            :class="type !== 'checkbox' ? 'form-control' : 'form-check-input'"
            :id="name"
            :type="type"
            :required="required"
            :dusk="dusk"
            :readonly="readonly"
            :checked="value"
        />
        <small class="text-danger" v-if="form.errors.has(name)">
            <i class="fas fa-exclamation-triangle"></i>
            {{ form.errors.get(name) }}
        </small>

        <label
            v-if="type === 'checkbox'"
            :for="name"
            class="form-check-label d-inline-block"
            >{{ label }}</label
        >
    </span>
</template>

<script>
export default {
    props: [
        'value',
        'name',
        'label',
        'required',
        'form',
        'type',
        'dusk',
        'readonly',
        'checked',
        'inline',
    ],
}
</script>
