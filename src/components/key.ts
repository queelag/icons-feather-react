import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherKeyElement } from '@aracna/icons-feather-web/elements/key-element'

export const IconFeatherKey: ElementComponent<IconFeatherKeyElement, IconProps> = createBaseElementComponent<
  IconFeatherKeyElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-key', IconFeatherKeyElement)
