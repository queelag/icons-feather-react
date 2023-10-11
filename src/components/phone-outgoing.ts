import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPhoneOutgoingElement } from '@aracna/icons-feather-web/elements/phone-outgoing-element'

export const IconFeatherPhoneOutgoing: ElementComponent<IconFeatherPhoneOutgoingElement, IconProps> = createBaseElementComponent<
  IconFeatherPhoneOutgoingElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-phone-outgoing', IconFeatherPhoneOutgoingElement)
