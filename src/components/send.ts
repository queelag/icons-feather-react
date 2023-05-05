import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSendElement } from '@aracna/icons-feather-web/elements/send-element.js'

export const IconFeatherSend: ElementComponent<IconFeatherSendElement, IconProps> = createBaseElementComponent<
  IconFeatherSendElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-send', IconFeatherSendElement)
