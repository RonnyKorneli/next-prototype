const openInNewTab = (event: Event, url: string) => {
  event.preventDefault();
  window.open(url, '_blank');
};

export default openInNewTab;
