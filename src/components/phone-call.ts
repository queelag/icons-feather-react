import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPhoneCallElement } from '@aracna/icons-feather-web/elements/phone-call-element'

export const IconFeatherPhoneCall: ElementComponent<IconFeatherPhoneCallElement, IconProps> = createBaseElementComponent<
  IconFeatherPhoneCallElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-phone-call', IconFeatherPhoneCallElement)
