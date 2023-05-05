import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFileTextElement } from '@aracna/icons-feather-web/elements/file-text-element.js'

export const IconFeatherFileText: ElementComponent<IconFeatherFileTextElement, IconProps> = createBaseElementComponent<
  IconFeatherFileTextElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-file-text', IconFeatherFileTextElement)
