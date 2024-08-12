import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherPhoneCallElement } from '@aracna/icons-feather-web/elements/phone-call-element'

export const IconFeatherPhoneCall: ElementComponent<IconFeatherPhoneCallElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPhoneCallElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-phone-call', IconFeatherPhoneCallElement)
