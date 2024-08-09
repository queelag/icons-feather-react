import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherPauseElement } from '@aracna/icons-feather-web/elements/pause-element'

export const IconFeatherPause: ElementComponent<IconFeatherPauseElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPauseElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-pause', IconFeatherPauseElement)
