export function useMedia() {
  const { public: { storageUrl } } = useRuntimeConfig()

  function getUrl(name: string) {
    const encoded = encodeURIComponent(name)

    return `${storageUrl}${encoded}?alt=media`
  }

  return {
    getUrl,
  }
}
