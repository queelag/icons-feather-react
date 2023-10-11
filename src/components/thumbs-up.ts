import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherThumbsUpElement } from '@aracna/icons-feather-web/elements/thumbs-up-element'

export const IconFeatherThumbsUp: ElementComponent<IconFeatherThumbsUpElement, IconProps> = createBaseElementComponent<
  IconFeatherThumbsUpElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-thumbs-up', IconFeatherThumbsUpElement)
