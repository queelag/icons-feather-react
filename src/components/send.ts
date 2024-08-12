import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherSendElement } from '@aracna/icons-feather-web/elements/send-element'

export const IconFeatherSend: ElementComponent<IconFeatherSendElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSendElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-send', IconFeatherSendElement)
