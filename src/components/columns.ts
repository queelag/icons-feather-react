import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherColumnsElement } from '@aracna/icons-feather-web/elements/columns-element.js'

export const IconFeatherColumns: ElementComponent<IconFeatherColumnsElement, IconProps> = createBaseElementComponent<
  IconFeatherColumnsElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-columns', IconFeatherColumnsElement)
