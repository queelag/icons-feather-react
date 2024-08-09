import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherVideoOffElement } from '@aracna/icons-feather-web/elements/video-off-element'

export const IconFeatherVideoOff: ElementComponent<IconFeatherVideoOffElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherVideoOffElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-video-off', IconFeatherVideoOffElement)
