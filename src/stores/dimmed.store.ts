import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHoldOn = defineStore('HoldOn', () => {
  const show = ref(false)
  const text = ref('Cargando...')
  const icon = ref('terminal')

  function open(newText: string = 'Cargando...', newIcon: string = 'terminal') {
    show.value = true
    text.value = newText
    icon.value = newIcon
  }

  function close() {
    show.value = false
    icon.value = 'terminal'
    text.value = 'Cargando...'
  }

  function toggle() {
    show.value = !show.value
  }

  function setText(newText: string = 'Cargando...') {
    text.value = newText
  }

  function setIcon(newIcon: string = 'terminal') {
    icon.value = newIcon
  }

  return { show, open, close, toggle, setText, text, setIcon, icon }
})
