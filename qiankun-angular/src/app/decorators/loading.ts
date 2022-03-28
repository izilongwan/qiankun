import { LoadingService } from 'ng-devui/loading';

export function loading() {
  return (target: Object, key: string | symbol, desc: any) => {
    const method = desc.value as Function;

    desc.value = async function (...args: any[]) {
      console.log(target, desc, this);
      const serviceRs = this.loadingService.open({
        // target: ,
        loadingTemplateRef: this.loadingTemplateRef,
        backdrop: true,
        // message: 'One moment please...',
        positionType: 'relative',
        view: {
          top: '50%',
          left: '50%'
        }
      })

      const rs = await method.apply(this, args)

      serviceRs.loadingInstance.close();

      return rs
    }

    return desc
  }
}
