import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherThumbsUpElement } from '@aracna/icons-feather-web/elements/thumbs-up-element'

export const IconFeatherThumbsUp: ElementComponent<IconFeatherThumbsUpElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherThumbsUpElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-thumbs-up', IconFeatherThumbsUpElement)
