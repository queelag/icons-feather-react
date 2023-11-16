import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSendElement } from '@aracna/icons-feather-web/elements/send-element'

export const IconFeatherSend: ElementComponent<IconFeatherSendElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSendElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-send', IconFeatherSendElement)
