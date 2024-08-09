import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherRewindElement } from '@aracna/icons-feather-web/elements/rewind-element'

export const IconFeatherRewind: ElementComponent<IconFeatherRewindElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherRewindElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-rewind', IconFeatherRewindElement)
