import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMicOffElement } from '@aracna/icons-feather-web/elements/mic-off-element'

export const IconFeatherMicOff: ElementComponent<IconFeatherMicOffElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMicOffElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-mic-off', IconFeatherMicOffElement)
