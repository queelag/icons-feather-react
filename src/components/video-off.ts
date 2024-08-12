import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherVideoOffElement } from '@aracna/icons-feather-web/elements/video-off-element'

export const IconFeatherVideoOff: ElementComponent<IconFeatherVideoOffElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherVideoOffElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-video-off', IconFeatherVideoOffElement)
