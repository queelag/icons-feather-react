import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherRewindElement } from '@aracna/icons-feather-web/elements/rewind-element'

export const IconFeatherRewind: ElementComponent<IconFeatherRewindElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherRewindElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-rewind', IconFeatherRewindElement)
