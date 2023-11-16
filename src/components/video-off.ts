import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherVideoOffElement } from '@aracna/icons-feather-web/elements/video-off-element'

export const IconFeatherVideoOff: ElementComponent<IconFeatherVideoOffElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherVideoOffElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-video-off', IconFeatherVideoOffElement)
