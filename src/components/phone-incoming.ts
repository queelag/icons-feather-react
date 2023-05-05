import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPhoneIncomingElement } from '@aracna/icons-feather-web/elements/phone-incoming-element.js'

export const IconFeatherPhoneIncoming: ElementComponent<IconFeatherPhoneIncomingElement, IconProps> = createBaseElementComponent<
  IconFeatherPhoneIncomingElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-phone-incoming', IconFeatherPhoneIncomingElement)
