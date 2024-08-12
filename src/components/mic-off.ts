import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMicOffElement } from '@aracna/icons-feather-web/elements/mic-off-element'

export const IconFeatherMicOff: ElementComponent<IconFeatherMicOffElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMicOffElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-mic-off', IconFeatherMicOffElement)
