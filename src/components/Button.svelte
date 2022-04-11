<script>
  export let btnType = "button"
  export let text = "no text";
  export let click = () => {alert('no click event specified')}
</script>

<button type={btnType} on:click|preventDefault={click()}>{text}</button>