import AlarmIconBold from '@icons/preisalarm-bold.svg';

export default function AlarmButton({ id }: { id?: string }) {
  return (
    <div
      className="alarm-activate -filled"
      id={id ? id : 'alarm-activate'}
      data-set-pricealarm-trigger="1"
      data-gtm="price-alarm-open-text"
    >
      <span className="alarm-icon">
        <AlarmIconBold className="alarm-outline" width="17" height="17" />
      </span>
      <span className="label">Preisalarm setzen</span>
    </div>
  );
}
