import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherDeleteElement } from '@aracna/icons-feather-web/elements/delete-element'

export const IconFeatherDelete: ElementComponent<IconFeatherDeleteElement, IconProps> = createBaseElementComponent<
  IconFeatherDeleteElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-delete', IconFeatherDeleteElement)
