import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherRewindElement } from '@aracna/icons-feather-web/elements/rewind-element'

export const IconFeatherRewind: ElementComponent<IconFeatherRewindElement, IconProps> = createBaseElementComponent<
  IconFeatherRewindElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-rewind', IconFeatherRewindElement)
